export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "quality" || !store.getters["auth/authenticated"]) {
        return redirect("/")
    }
}