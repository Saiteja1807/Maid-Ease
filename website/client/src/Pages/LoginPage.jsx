import LoginForm from "../components/LoginForm"
import Onboarding from "../components/Onboarding"

function LoginPage() {
    return (
        <div className="flex h-screen">
            <Onboarding />
            <LoginForm />
        </div>
    )
}

export default LoginPage