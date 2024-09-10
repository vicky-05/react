import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="background">
        
      </div>
      <form>
        <h3>Login <span>Here</span></h3>

        <label for="username">User</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        

        <button >Log In With OTP</button>
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
