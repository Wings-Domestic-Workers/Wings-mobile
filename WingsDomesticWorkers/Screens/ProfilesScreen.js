import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-elements";
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Dialog from "react-native-dialog";
import CheckBox from '@react-native-community/checkbox';

function Profiles() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    national_id: "",
    phone_number: "",
    password: "",
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }

        const response = await fetch("https://your-api-url.com/dashboard", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          setForm({
            first_name: userData.first_name || "",
            middle_name: userData.middle_name || "",
            last_name: userData.last_name || "",
            national_id: userData.national_id || "",
            phone_number: userData.phone_number || "",
            password: "",
          });
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.error || "Failed to fetch user data");
        }
      } catch (error) {
        setErrorMessage("An error occurred while fetching data");
      }
    };

    fetchData();
  }, []);

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });

    if (name === "password") {
      setPasswordError(false);
    }
  };

  const handleDelete = () => {
    setShowDialog(true);
  };

  const confirmDelete = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const response = await fetch("https://your-api-url.com/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const deleteData = await response.json();
        setSuccessMessage(deleteData.message);
        navigation.navigate("Home");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to delete account");
      }
    } catch (error) {
      setErrorMessage("An error occurred while deleting account");
    } finally {
      setShowDialog(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

      const updatedFields = { ...form };

      const response = await fetch("https://your-api-url.com/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFields),
      });

      if (response.ok) {
        const updateData = await response.json();
        setSuccessMessage(updateData.message);
        setShowUpdateForm(false);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Failed to update profile");
        if (
          errorData.error ===
          "Either the current password or a new one is required"
        ) {
          setPasswordError(true);
        }
      }
    } catch (error) {
      setErrorMessage("An error occurred while updating profile");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <ScrollView contentContainerStyle={tw`items-center p-4`}>
      {user && (
        <View style={tw`w-full max-w-4xl mt-10`}>
          <View style={tw`max-w-sm bg-white p-4 rounded-lg shadow-md`}>
            <View style={tw`flex flex-row items-center mt-4`}>
              <Avatar
                rounded
                source={{ uri: user.image }}
                size="large"
                containerStyle={tw`mr-4`}
              />
              <View>
                <Text style={tw`text-lg font-bold text-gray-900`}>
                  Name:{" "}
                  <Text style={tw`font-normal text-gray-700`}>
                    {user.first_name} {user.middle_name} {user.last_name}
                  </Text>
                </Text>
                <Text style={tw`text-lg font-bold text-gray-900`}>
                  Email:{" "}
                  <Text style={tw`font-normal text-gray-700`}>
                    {user.email}
                  </Text>
                </Text>
                <Text style={tw`text-lg font-bold text-gray-900`}>
                  Phone Number:{" "}
                  <Text style={tw`font-normal text-gray-700`}>
                    {user.phone_number}
                  </Text>
                </Text>
                <Text style={tw`text-lg font-bold text-gray-900`}>
                  National Id:{" "}
                  <Text style={tw`font-normal text-gray-700`}>
                    {user.national_id}
                  </Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={tw`mt-4 p-2 bg-blue-500 rounded`}
              onPress={() => setShowUpdateForm(!showUpdateForm)}
            >
              <Text style={tw`text-white text-center`}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`mt-4 p-2 bg-red-500 rounded`}
              onPress={handleDelete}
            >
              <Text style={tw`text-white text-center`}>Delete Account</Text>
            </TouchableOpacity>
          </View>
          {showUpdateForm && (
            <View style={tw`max-w-sm bg-white p-4 rounded-lg shadow-md mt-4`}>
              <Text style={tw`text-lg font-bold text-gray-900`}>
                Update Profile
              </Text>
              <TextInput
                style={tw`mt-2 border p-2 rounded`}
                placeholder="First Name"
                value={form.first_name}
                onChangeText={(value) => handleChange("first_name", value)}
              />
              <TextInput
                style={tw`mt-2 border p-2 rounded`}
                placeholder="Middle Name"
                value={form.middle_name}
                onChangeText={(value) => handleChange("middle_name", value)}
              />
              <TextInput
                style={tw`mt-2 border p-2 rounded`}
                placeholder="Last Name"
                value={form.last_name}
                onChangeText={(value) => handleChange("last_name", value)}
              />
              <TextInput
                style={tw`mt-2 border p-2 rounded`}
                placeholder="National ID"
                value={form.national_id}
                onChangeText={(value) => handleChange("national_id", value)}
              />
              <TextInput
                style={tw`mt-2 border p-2 rounded`}
                placeholder="Phone Number"
                value={form.phone_number}
                onChangeText={(value) => handleChange("phone_number", value)}
              />
              <TextInput
                style={tw`mt-2 border p-2 rounded`}
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                value={form.password}
                onChangeText={(value) => handleChange("password", value)}
              />
              {passwordError && (
                <Text style={tw`text-red-500 mt-2`}>
                  Enter either the current password or a new one
                </Text>
              )}
              <View style={tw`flex flex-row items-center mt-2`}>
                <CheckBox
                  value={passwordVisible}
                  onValueChange={togglePasswordVisibility}
                />
                <Text style={tw`ml-2`}>Show Password</Text>
              </View>
              <TouchableOpacity
                style={tw`mt-4 p-2 bg-blue-500 rounded`}
                onPress={handleSubmit}
              >
                <Text style={tw`text-white text-center`}>Update</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
      <Dialog.Container visible={showDialog}>
        <Dialog.Title>Confirm Delete</Dialog.Title>
        <Dialog.Description>
          Are you sure you want to delete your account? You cannot undo this
          action.
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={() => setShowDialog(false)} />
        <Dialog.Button label="Delete" onPress={confirmDelete} />
      </Dialog.Container>
      {errorMessage && <Text style={tw`mt-5 text-red-500`}>{errorMessage}</Text>}
      {successMessage && <Text style={tw`mt-5 text-green-500`}>{successMessage}</Text>}
    </ScrollView>
  );
}

export default Profiles;

// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import { Avatar } from "react-native-elements";
// import Dialog from "react-native-dialog";
// import CheckBox from '@react-native-community/checkbox';
// import tw from 'tailwind-react-native-classnames';

// function Profiles() {
//   const [form, setForm] = useState({
//     first_name: "John",
//     middle_name: "Doe",
//     last_name: "Smith",
//     national_id: "1234567890",
//     phone_number: "+1234567890",
//     password: "",
//   });
//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [showDialog, setShowDialog] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (name, value) => {
//     setForm({
//       ...form,
//       [name]: value,
//     });
//     if (name === "password" && value) {
//       setPasswordError(false);
//     }
//   };

//   const handleDelete = () => {
//     setShowDialog(true);
//   };

//   const confirmDelete = () => {
//     setShowDialog(false);
//     // Dummy delete action
//     setSuccessMessage("Account deleted successfully.");
//     setTimeout(() => {
//       // Redirect to home or login screen after deletion
//       setSuccessMessage("");
//     }, 2000);
//   };

//   const handleSubmit = () => {
//     // Dummy update action
//     setSuccessMessage("Profile updated successfully.");
//     setTimeout(() => {
//       setSuccessMessage("");
//       setShowUpdateForm(false);
//     }, 2000);
//   };

//   return (
//     <ScrollView contentContainerStyle={tw`items-center p-4`}>
//       <View style={tw`w-full max-w-4xl mt-10`}>
//         <View style={tw`max-w-sm bg-white p-4 rounded-lg shadow-md`}>
//           <View style={tw`flex flex-row items-center mt-4`}>
//             <Avatar
//               rounded
//               // Replace with actual image source
//               source={{ uri: 'https://via.placeholder.com/150' }}
//               size="large"
//               containerStyle={tw`mr-4`}
//             />
//             <View>
//               <Text style={tw`text-lg font-bold text-gray-900`}>
//                 Name:{" "}
//                 <Text style={tw`font-normal text-gray-700`}>
//                   {form.first_name} {form.middle_name} {form.last_name}
//                 </Text>
//               </Text>
//               <Text style={tw`text-lg font-bold text-gray-900`}>
//                 Phone Number:{" "}
//                 <Text style={tw`font-normal text-gray-700`}>
//                   {form.phone_number}
//                 </Text>
//               </Text>
//               <Text style={tw`text-lg font-bold text-gray-900`}>
//                 National Id:{" "}
//                 <Text style={tw`font-normal text-gray-700`}>
//                   {form.national_id}
//                 </Text>
//               </Text>
//             </View>
//           </View>
//           <TouchableOpacity
//             style={tw`mt-4 p-2 bg-blue-500 rounded`}
//             onPress={() => setShowUpdateForm(!showUpdateForm)}
//           >
//             <Text style={tw`text-white text-center`}>Update</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={tw`mt-4 p-2 bg-red-500 rounded`}
//             onPress={handleDelete}
//           >
//             <Text style={tw`text-white text-center`}>Delete Account</Text>
//           </TouchableOpacity>
//         </View>
//         {showUpdateForm && (
//           <View style={tw`max-w-sm bg-white p-4 rounded-lg shadow-md mt-4`}>
//             <View>
//               <Text style={tw`text-lg font-bold text-gray-900`}>
//                 Update Profile
//               </Text>
//               <TextInput
//                 style={tw`mt-2 border p-2 rounded`}
//                 placeholder="First Name"
//                 value={form.first_name}
//                 onChangeText={(value) => handleChange("first_name", value)}
//               />
//               <TextInput
//                 style={tw`mt-2 border p-2 rounded`}
//                 placeholder="Middle Name"
//                 value={form.middle_name}
//                 onChangeText={(value) => handleChange("middle_name", value)}
//               />
//               <TextInput
//                 style={tw`mt-2 border p-2 rounded`}
//                 placeholder="Last Name"
//                 value={form.last_name}
//                 onChangeText={(value) => handleChange("last_name", value)}
//               />
//               <TextInput
//                 style={tw`mt-2 border p-2 rounded`}
//                 placeholder="National ID"
//                 value={form.national_id}
//                 onChangeText={(value) => handleChange("national_id", value)}
//               />
//               <TextInput
//                 style={tw`mt-2 border p-2 rounded`}
//                 placeholder="Phone Number"
//                 value={form.phone_number}
//                 onChangeText={(value) => handleChange("phone_number", value)}
//               />
//               <TextInput
//                 style={tw`mt-2 border p-2 rounded`}
//                 placeholder="Password"
//                 secureTextEntry={!showPassword}
//                 value={form.password}
//                 onChangeText={(value) => handleChange("password", value)}
//               />
//               {passwordError && (
//                 <Text style={tw`text-red-500 mt-2`}>
//                   Enter either the current password or a new one
//                 </Text>
//               )}
//               <View style={tw`flex flex-row items-center mt-2`}>
//                 <CheckBox
//                   value={showPassword}
//                   onValueChange={setShowPassword}
//                 />
//                 <Text style={tw`ml-2`}>Show Password</Text>
//               </View>
//               <TouchableOpacity
//                 style={tw`mt-4 p-2 bg-blue-500 rounded`}
//                 onPress={handleSubmit}
//               >
//                 <Text style={tw`text-white text-center`}>Update</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       </View>
//       <Dialog.Container visible={showDialog}>
//         <Dialog.Title>Confirm Delete</Dialog.Title>
//         <Dialog.Description>
//           Are you sure you want to delete your account? You cannot undo this
//           action.
//         </Dialog.Description>
//         <Dialog.Button label="Cancel" onPress={() => setShowDialog(false)} />
//         <Dialog.Button label="Delete" onPress={confirmDelete} />
//       </Dialog.Container>
//       {errorMessage && <Text style={tw`mt-5 text-red-500`}>{errorMessage}</Text>}
//       {successMessage && <Text style={tw`mt-5 text-green-500`}>{successMessage}</Text>}
//     </ScrollView>
//   );
// }

// export default Profiles;
