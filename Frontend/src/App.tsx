import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import useIsSignedIn from './components/useIsSignedIn'
import { Spinner } from './components/Spinner'


function App() {
  const { isSignedIn, loading } = useIsSignedIn();
  if(loading) {
        return(
            <div>
                <div className="h-screen flex flex-col justify-center">
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                </div>
            </div>
        )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            isSignedIn?<Navigate to={"/blogs"}/>:<Navigate to={"/signin"}/>}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App