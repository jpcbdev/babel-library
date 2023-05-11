import { useEffect } from 'react';
import { useRouter } from 'next/router';

function FourOhFour() {
    const router = useRouter();
    useEffect(() => { router.push('/'); });
    return null;
}

export default FourOhFour;