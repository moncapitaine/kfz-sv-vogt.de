
export interface CollapseActionParams {
  open?: boolean;
  duration?: number;
  easing?: 'ease' | string
}

export default function collapse (node: HTMLElement, params: CollapseActionParams) {

  const effectiveParams = {
      open: true,
      duration: 0.2,
      easing: 'ease',
      ...params
  }

  let transitionEndResolve: (value?: unknown) => void = () => null
  let transitionEndReject: (reason: unknown) => void = () => null

  const listener =  () => {
    transitionEndResolve()
    transitionEndResolve = () => null
    transitionEndReject = () => null
}
  node.addEventListener('transitionend', listener)

  // convenience functions
  async function asyncTransitionEnd () {
      return new Promise((resolve, reject) => {
          transitionEndResolve = resolve
          transitionEndReject = reject
      })
  }

  async function nextFrame () {
      return new Promise(requestAnimationFrame)
  }

  function transition () {
      return `height ${params.duration}s ${params.easing}`
  }

  // set initial styles
  node.style.transition = transition()
  node.style.height = params.open ? 'auto' : '0px'

  if (params.open) {
      node.style.overflow = 'visible'
  }
  else {
      node.style.overflow = 'hidden'
  }

  async function enter () {

      // height is already in pixels
      // start the transition
      node.style.height = node.scrollHeight + 'px'

      // wait for transition to end,
      // then switch back to height auto
      try {
          await asyncTransitionEnd()
          node.style.height = 'auto'
          node.style.overflow = 'visible'
      } catch(err) {
          // interrupted by a leave transition
      }

  }

  async function leave () {

      if (node.style.height === 'auto') {

          // temporarily turn transitions off
          node.style.transition = 'none'
          await nextFrame()

          // set height to pixels, and turn transition back on
          node.style.height = node.scrollHeight + 'px'
          node.style.transition = transition()
          await nextFrame()

          // start the transition
          node.style.overflow = 'hidden'
          node.style.height = '0px'

      }
      else {

          // we are interrupting an enter transition
          transitionEndReject('interrupted')
          node.style.overflow = 'hidden'
          node.style.height = '0px'

      }

  }

  function update (newParams: CollapseActionParams) {
      params = {...effectiveParams, ...newParams}
      params.open ? enter() : leave()
  }

  function destroy () {
      node.removeEventListener('transitionend', listener)
  }

  return { update, destroy }

}