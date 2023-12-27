import { UserButton } from '@clerk/nextjs'
import { checkRole } from '@/utils/roles'
import { redirect } from 'next/navigation'

export default function DashboardPage() {
	if (!checkRole('admin')) {
		redirect('/')
	}

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
