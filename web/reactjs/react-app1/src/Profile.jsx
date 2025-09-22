import profile from './assets/images/profile.jpeg' 

const Profile = () => {

  return (
    <>
      <div className='profile-card'>
        <img src={profile} width={180} />
        <h3>Alex Cardio</h3>
        <p>@alex_cardio</p>
        <button>Following</button>
      </div>
    </>
  )
}

export default Profile