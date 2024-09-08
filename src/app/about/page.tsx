import Button from '@/Components/Button';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
           
            <h2 className='text-xl'>About Page</h2>
            <Button />
            <Image src={"https://images.unsplash.com/photo-1700774606456-f93edacd462f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={500} height={300} alt='Not found' />
        </div>
    );
};

export default page;