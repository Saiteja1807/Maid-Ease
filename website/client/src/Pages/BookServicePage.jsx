import BookServiceForm from "../components/BookServiceForm"
import Onboarding from "../components/Onboarding"

function BookServicePage() {
    return (
        <div className="flex h-screen">
            <Onboarding />
            <BookServiceForm />
        </div>
    )
}

export default BookServicePage