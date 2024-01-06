import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const StoreContext = createContext(undefined);

export const useRootStore = () => {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error("useStore must be used within a StoreProvider.");
    }
    return store;
};

export const RootStoreProvider = ({ store, children }) => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
};

RootStoreProvider.propTypes = {
    store: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired
};
