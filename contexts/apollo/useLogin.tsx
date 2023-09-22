import { gql, useMutation } from "@apollo/client";

const LOGIN_MUTATION = gql`
mutation LoginUser($input: UserLoginInput){
    loginUser(input: $input){
        accessToken,
        refreshToken
    }
}

`

export const useLogin = () => {
    const [logUserIn, { loading, data, error }] = useMutation(LOGIN_MUTATION)
    return { logUserIn, loading, data, error }
}