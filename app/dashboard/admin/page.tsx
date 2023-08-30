import { getServerSession } from "next-auth"
import { authOptions } from "../../../pages/api/auth/[...nextauth]"


const Admin = async () => {
const session = await getServerSession(authOptions)

  return (
    <div>
      <h1>Admin</h1>
      <p>hello, {session?.user?.name}!</p>
    </div>
  )
}

export default Admin