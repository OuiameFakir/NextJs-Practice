'use client';
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const navLinks=[
    {name:'Register', href:'/register'},
    {name:'Login', href:'/login'},
    {name:'Forget Password', href:'/password'},
];
export default function AuthLayout({children,}:{
    children: React.ReactNode,
}){
    const pathname= usePathname();

    return <div>
        {navLinks.map((link)=>{
            const isActive = pathname.startsWith(link.href);
            return(
                <div>
                    <Link 
                        href={link.href} 
                        key={link.name}
                        className={isActive? 'font-bold text-danger mr-4' :'text-primary mr-4'}
                    >
                        {link.name}
                    </Link>
                </div>
            )
        })

        }

    </div>
}
