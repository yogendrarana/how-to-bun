import type { FC } from 'hono/jsx'

const HomePage: FC = () => {
    return (
        <div>
            <h1>Hello Hono!</h1>
            <p>Welcome to Hono, a simple web framework for Bun.</p>
        </div>
    )
}

export default HomePage;