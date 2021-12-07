import { Router } from "vue-router"

// Typed Routes used in Components
export const Routes = {
}

export function configRouter(router:Router)  {
    return router
}

export function getRedirect(router:Router) {
    let { redirect } = router.currentRoute?.value.query
    let ret = redirect && Array.isArray(redirect)
        ? redirect[0]
        : redirect
    return ret?.toString()
}
