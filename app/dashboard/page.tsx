import { UserButton } from '@clerk/nextjs'

export default function DashboardPage() {
	return (
		<div className="p-10 content-center">
			<h1 className="text-4xl mb-4">Dashboard</h1>
			<UserButton afterSignOutUrl="/" />
			<a href={`/`} type="button" className="mt-5 float-left btn info">
				Go to Home
			</a>
		</div>
	)
}
