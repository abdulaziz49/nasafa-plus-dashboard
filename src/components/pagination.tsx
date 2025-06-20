const Pagination = () => {
    return (
        <div className={"join"}>
            <button className="join-item btn bg-base-100">«</button>
            <button className="join-item btn bg-base-100">
                {
                    document.dir === "rtl" ?
                        <span>20 / 1</span> :
                        <span>1 / 20</span>
                }
            </button>
            <button className="join-item bg-base-100 btn">»</button>
        </div>
    )
}

export default Pagination