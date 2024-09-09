import logo from './logo.svg';
import './App.css';
import img1 from './images/login.jpg'
function App() {
  return (
    <div>
      <div className="background">
        
      </div>
      <form>
        <h3>Login <span>Here</span></h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button >Log In</button>
        <div className="social">
          <div className="go"><i class="fab fa-google"></i>  Google</div>
          <div className="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
        <div className="register">
          <p>New to Website?</p><a href="">Register</a>
          
        </div>
      </form>
    </div>
  );
}

export default App;
