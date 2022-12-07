import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId:
        '414270371574-hdsp4cihuo23vo0u4qbhjgmgb54otfhn.apps.googleusercontent.com' as string,
      clientSecret: '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' as string,
    }),
    // ...add more providers here
  ],
});
