export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "dispatch") {
        return redirect("/")
    }
}