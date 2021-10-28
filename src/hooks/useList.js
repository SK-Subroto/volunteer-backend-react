import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/saveToLocal';

const useList = (services) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        if (services.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedTest = services.find(service => service.id === key);
                if (addedTest) {
                    const testDate = savedCart[key];
                    addedTest.date = testDate;
                    storedCart.push(addedTest);
                }
            }
            setList(storedCart);
        }
    }, [services])

    return [list, setList];
};

export default useList;