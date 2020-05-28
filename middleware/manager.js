export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "manager") {
        return redirect("/")
    }
}