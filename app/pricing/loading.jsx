import AnimationLoading from "../../components/AnimationLoading";

export default function Loading() {
  return (
    <div className=" bg-background w-full h-screen  text-center font-bold">
      <p className=" fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <AnimationLoading />
      </p>
    </div>
  );
}
