import { createBrowserRouter } from 'react-router-dom'
import AccountPage from '@pages/AccountPage'
import DashboardPage from '@pages/DashboardPage'
import LoginPage from '@pages/LoginPage'
import RegisterPage from '@pages/RegisterPage'
import BaselinePage from '@pages/BaselinePage'
import TransactionsPage from '@pages/TransactionsPage'
import DebtsPage from '@pages/DebtsPage'
import StatsPage from '@pages/StatsPage'

export const router = createBrowserRouter ([
    {
        path: '/',
        element: <DashboardPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/account',
        element: <AccountPage />
    },
    {
        path: '/baseline',
        element: <BaselinePage />
    },
    {
        path: '/transactions',
        element: <TransactionsPage />
    },
    {
        path: '/debts',
        element: <DebtsPage />
    },
    {
        path: '/stats',
        element: <StatsPage />
    }
])

export default router