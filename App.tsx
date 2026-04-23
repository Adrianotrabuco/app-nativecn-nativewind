import { StatusBar } from 'expo-status-bar';
import "./global.css";
import { Profile } from '@/app/Profile';
<<<<<<< HEAD
import { ToastProvider } from '@/components/Toast';
=======
>>>>>>> a72115172c87ccf3be6918a2ec1c00d8b6e8262b

export default function App() {
  return (
    <>
<<<<<<< HEAD
      <ToastProvider>
        <Profile />
        <StatusBar style="light" />
      </ToastProvider>
    </>
  );
}
=======
      <Profile />
      <StatusBar style="light" />
    </>
  );
}


>>>>>>> a72115172c87ccf3be6918a2ec1c00d8b6e8262b
