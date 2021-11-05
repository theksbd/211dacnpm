
const commentData = [
    {
        "userName": "Tiến Minh",
        "time": "2 days ago",
        "content": "Sản phẩm rất tuyệt vời"
    },
    {
        "userName": "Tiến Minh",
        "time": "2 days ago",
        "content": "Sản phẩm rất tuyệt vời"
    },
    {
        "userName": "Tiến Minh",
        "time": "2 days ago",
        "content": "Sản phẩm rất tuyệt vời"
    },
    {
        "userName": "Tiến Minh",
        "time": "2 days ago",
        "content": "Sản phẩm rất tuyệt vời"
    },

]


function OneComment({ comment }) {
    return (<div className="container mt-3">
        <div class="card p-3">
            <div class="d-flex justify-content-between align-items-center">
                <div class="user d-flex flex-row align-items-center">
                    <span class="badge bg-secondary" >{comment.userName[0]}</span>
                    <span>
                        <small class="font-weight-bold text-dark mx-3">{comment.userName}</small>
                    </span>
                </div>
                <small>{comment.time}</small>
            </div>
            <div class="action d-flex justify-content-between mt-2 align-items-center" >
                <div class="reply p-3 mx-4 card bg-light h-100">
                    <small class="font-weight-bold h4">{comment.content}</small>
                </div>
            </div>
        </div>
    </div>)
}

export default function Comment() {
    return (
        <div class="container">
            <div class="row p-3">
                <div className="col-5 text-center shadow-sm p-5">
                    <span class="h1">5/5</span>
                    <div class="w-80 m-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#CCCC00" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#CCCC00" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#CCCC00" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#CCCC00" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#CCCC00" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                    <span class="display-6">21 đánh giá và nhận xét</span>
                </div>
                <div class="col-7">
                    <div >
                        <span class="h3">5</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#CCCC00"
                            class="bi bi-star-fill mx-1" viewBox="0 0 16 16" style={{ marginBottom: "13px" }}>
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: "70%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            {commentData.map(comment => {
                return <OneComment comment={comment} />
            })}
        </div>)
}