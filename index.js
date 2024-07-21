ReactDOM.render(<h1>React rendering on Javascript</h1>, document.getElementById("root"))
ReactDOM.render(<p>Hi! my name is Damola!</p>, document.getElementById('root'))

function MainContent() {
    return (
        <h1>Im learning react</h1>
    )
}

ReactDOM.render(
    <div>
        {/* <Navbar /> */}
        <MainContent />
    </div>,
    document.getElementById('content')
)

const h1 = document.createElement("h1")
h1.textContent = 'This is an imoerative way to program'
h1.className = "header"
const root = document.getElementById('root')
root.append(h1)

const roots = document.querySelector(".header")
// roots.innerHTML = "Im not learning react again"