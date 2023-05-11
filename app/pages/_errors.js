import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Error({ statusCode }) {
    const router = useRouter();
    useEffect(() => { router.push('/'); });
    return null;
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error