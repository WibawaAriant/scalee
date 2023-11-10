import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./pages/login/login"
import Register from "./pages/register/Register"
import Home from "./pages/home/Home"
import Explore from "./pages/explore/Explore"
import Profile from "./pages/profile/Profile"
import Setting from "./pages/setting/Setting"
import Create from "./pages/create/Create"
import UserPostExplore from "./pages/userPostExplore/UserPostExplore"
import UserFollowing from "./pages/userFollowing/UserFollowing"
import UserFollowers from "./pages/userFollowers/UserFollowers"
import UserFollowingPost from "./pages/userFollowingPost/UserFollowingPost"
import DetailExplore from "./pages/detailExplore/DetailExplore"
import PrivateRoute from "./components/privateRoute/PrivateRoute"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="registrasi" element={<Register />} />
          <Route
            path={"/scale"}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path={"/profile"}
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path={"/scale/:userId"}
            element={
              <PrivateRoute>
                <UserFollowingPost />
              </PrivateRoute>
            }
          />
          <Route
            path={"/setting"}
            element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            }
          />
          <Route
            path={"/create"}
            element={
              <PrivateRoute>
                <Create />
              </PrivateRoute>
            }
          />
          <Route
            path={"/setting"}
            element={
              <PrivateRoute>
                <Setting />
              </PrivateRoute>
            }
          />
          <Route
            path={"/user-following/:id"}
            element={
              <PrivateRoute>
                <UserFollowing />
              </PrivateRoute>
            }
          />
          <Route
            path={"user-follower"}
            element={
              <PrivateRoute>
                <UserFollowers />
              </PrivateRoute>
            }
          />
          <Route
            path={"/explore"}
            element={
              <PrivateRoute>
                <Explore />
              </PrivateRoute>
            }
          />
          <Route
            path={"/explore/:userId"}
            element={
              <PrivateRoute>
                <UserPostExplore />
              </PrivateRoute>
            }
          />
          <Route
            path={"/detail/:id"}
            element={
              <PrivateRoute>
                <DetailExplore />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
