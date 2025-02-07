import { Plugin } from "graphql-yoga";

export default function useProtectedRoute(): Plugin {
  return {
    onRequest({ request, fetchAPI, endResponse }) {
      const route = request.url;
      console.log("path is", route);


    //   if (!request.headers.get("authorization")) {
    //     endResponse(
    //       new fetchAPI.Response(null, {
    //         status: 401,
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       })
    //     );
    //   }
    },
  };
}
