import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.replace('/getting-started/home');
    }, []);
    return <div>Redirecting Homepage...</div>;
};

export default IndexPage;
