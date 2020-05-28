export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "operator") {
        return redirect("/")
    }
}