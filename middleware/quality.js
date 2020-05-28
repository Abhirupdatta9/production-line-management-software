export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "quality") {
        return redirect("/")
    }
}