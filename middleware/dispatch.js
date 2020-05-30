export default function ({ store, redirect }) {
    if (store.getters["auth/name"] != "dispatch" || !store.getters["auth/authenticated"]) {
        return redirect("/")
    }
}