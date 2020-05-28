export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "incharge") {
        return redirect("/")
    }
}