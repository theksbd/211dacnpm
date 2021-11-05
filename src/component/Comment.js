
function OneComment(props) {
    return (<div className="container">
        <div class="card">
            <div class="card-header" >
                    <span class="badge bg-secondary">T</span>
                    <p>Hoàng Minh Tiến</p>
            </div>
            <div class="card-body rounded">Content</div>
        </div>
    </div>)
}

export default function Comment() {
    return (
        <div>
            <OneComment />
        </div>)
}