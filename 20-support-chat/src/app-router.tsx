import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AuthLayout from "@/layouts/auth-layout";
import LoginPage from "@/pages/auth/login-page";
import RegisterPage from "@/pages/auth/register-page";
import EmptyChatState from "@/components/empty-state/empty-chat-state";
import ChatPageSkeleton from "@/layouts/skeletons/chat-page-skeleton";
import ChatLayoutSkeleton from "@/layouts/skeletons/chat-layout-skeleton";

const ChatLayout = lazy(async () => import("@/layouts/chat-layout"));
const ChatPage = lazy(async () => import("@/pages/chat-page"));

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="/chat" element={
          <Suspense fallback={<ChatLayoutSkeleton />}>
            <ChatLayout />
          </Suspense>
        }>
          <Route index element={<EmptyChatState />} />

          <Route path="/chat/:chatId" element={
            <Suspense fallback={<ChatPageSkeleton />}>
              <ChatPage />
            </Suspense>
          } />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;