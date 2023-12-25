import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex items-center justify-center w-full mt-10 md:mt-20">
            <SignUp />
        </div>
    );
}
