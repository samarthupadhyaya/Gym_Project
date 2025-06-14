import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
import { showNotification } from "../../common/headerSlice";
import InputText from "../../../components/Input/InputText";
import TextAreaInput from "../../../components/Input/TextAreaInput";
import ToogleInput from "../../../components/Input/ToogleInput";
import GymServices from "../../../services/GymServices";

function ProfileSettings() {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({});
  // Call API to update profile settings changes
  const updateProfile = () => {
    dispatch(showNotification({ message: "Profile Updated", status: 1 }));
  };

  const getProfile = () => {
    let res = GymServices.getProfile();
    res
      .then((resData) => {
        return resData.json();
      })
      .then((resBody) => {
        setInfo(resBody.data);
      })
      .catch((error) => {
        return error;
      });
  };
  const update = () => {
    let res = GymServices.update();
    res
      .then((resData) => {
        return resData.json();
      })
      .then((resBody) => {
        setInfo(resBody.data);
      })
      .catch((error) => {
        return error;
      });
  };
  const listGym = () => {
    let res = GymServices.listGym();
    res
      .then((resData) => {
        return resData.json();
      })
      .then((resBody) => {
        setInfo(resBody.data);
      })
      .catch((error) => {
        return error;
      });
  };
  const addGym= () => {
    let res = GymServices.addGym();
    res
      .then((resData) => {
        return resData.json();
      })
      .then((resBody) => {
        setInfo(resBody.data);
      })
      .catch((error) => {
        return error;
      });
  };
  const updateGym = () => {
    let res = GymServices.updateGym();
    res
      .then((resData) => {
        return resData.json();
      })
      .then((resBody) => {
        setInfo(resBody.data);
      })
      .catch((error) => {
        return error;
      });
  };
  const deleteGym = () => {
    let res = GymServices.deleteGym();
    res
      .then((resData) => {
        return resData.json();
      })
      .then((resBody) => {
        setInfo(resBody.data);
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  const updateFormValue = ({ updateType, value }) => {
    console.log(updateType);
  };

  return (
    <>
      <TitleCard title="Profile Settings" topMargin="mt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Name"
            defaultValue={info?.name}
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Email Id"
            defaultValue="alex@dashwind.com"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Title"
            defaultValue="UI/UX Designer"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Place"
            defaultValue="California"
            updateFormValue={updateFormValue}
          />
          <TextAreaInput
            labelTitle="About"
            defaultValue="Doing what I love, part time traveller"
            updateFormValue={updateFormValue}
          />
        </div>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputText
            labelTitle="Language"
            defaultValue="English"
            updateFormValue={updateFormValue}
          />
          <InputText
            labelTitle="Timezone"
            defaultValue="IST"
            updateFormValue={updateFormValue}
          />
          <ToogleInput
            updateType="syncData"
            labelTitle="Sync Data"
            defaultValue={true}
            updateFormValue={updateFormValue}
          />
        </div>

        <div className="mt-16">
          <button
            className="btn btn-primary float-right"
            onClick={() => updateProfile()}
          >
            Update
          </button>
        </div>
      </TitleCard>
    </>
  );
}

export default ProfileSettings;
