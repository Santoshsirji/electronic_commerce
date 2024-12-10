import React from 'react';
import { auth } from '@/auth';
import {redirect} from "next/navigation";

import {db} from '@/lib/db';
import { SettingsForm } from './components/settings-form';
import getCurrentUser from '@/actions/getCurrentUser';


interface SettingPageProps {
    params: {
        storeId: string;
    }
};


const SettingsPage: React.FC<SettingPageProps> =async ({
    params
}) => {

  const user = await getCurrentUser();


    if(user === null || !user.id) {
        redirect("/sign-in");
    }

    const store = await db.store.findFirst({
        where: {
            id: params.storeId,
            
        }
    });

    if(!store){
        redirect('/settings');
    }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SettingsForm initialData={store}/>
      </div>
    </div>
  )
}

export default SettingsPage
