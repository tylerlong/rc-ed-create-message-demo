const app = require("./app")
// @ponicode
describe("app.initApp", () => {
    test("0", () => {
        let callFunction = () => {
            app.initApp({ appExtend: "bc23a9d531064583ace8f67dad60f6bb", NO_ROUTE: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            app.initApp({ appExtend: 12345, NO_ROUTE: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            app.initApp({ appExtend: "bc23a9d531064583ace8f67dad60f6bb", NO_ROUTE: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            app.initApp({ appExtend: "c466a48309794261b64a4f02cfcc3d64", NO_ROUTE: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            app.initApp({ appExtend: 12345, NO_ROUTE: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            app.initApp(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
