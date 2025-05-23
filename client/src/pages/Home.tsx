import { Pagination } from "../components/common/Pagination";
import ProductList from "../components/ProductList";
import { SearchInput } from "../components/SearchInput.";
import { useProductContext } from "../context/ProductContext";

export function Home() {
    const { page, setPage, total } = useProductContext();
    return (
        <div>
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className=" fw-bold m-0 p-0">Products</h2>
                    <SearchInput />
                </div>

                <ProductList />

                <div className="my-4"></div>

                <Pagination
                    currentPage={page}
                    totalItems={total}
                    pageSize={10}
                    onPageChange={setPage}
                />
            </div>
        </div>
    )
}