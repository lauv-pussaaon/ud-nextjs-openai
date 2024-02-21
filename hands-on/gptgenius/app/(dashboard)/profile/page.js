import { UserProfile } from "@clerk/nextjs";

async function ProfilePage() {
    return (
        <div>
            <UserProfile />
        </div>
    );
}
export default ProfilePage;
