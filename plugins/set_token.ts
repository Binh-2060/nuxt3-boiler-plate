import cookie from "js-cookie";
export default defineNuxtPlugin(async (nuxtApp) => {
  const user = await getCurrentUser();

  if (user) {
    const token = await useCurrentUser();
    localStorage.setItem(
      "token",
      //@ts-ignore
      token ? `Bearer ${await token.value?.getIdToken(true)}` : ""
    );

    cookie.set(
      "token",
      token ? `Bearer ${await token.value?.getIdToken(true)}` : ""
    );

    return;
  }
});
