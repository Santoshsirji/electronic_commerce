import { redirect } from "next/navigation";

import StoreSwitcher from "@/components/store-switcher";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import {db} from "@/lib/db";
import getCurrentUser from "@/actions/getCurrentUser";

const Navbar = async () => {
 const user = await getCurrentUser();

  if (!user) {
    redirect('/auth/login');
  }

  const stores = await db.store.findMany({
    where: {
      userId: user.id,
    }
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;