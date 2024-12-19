import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <div className="m-5 rounded-md">
      <AlertDialog open={loading}>
        <AlertDialogContent className="flex flex-col items-center py-10">
          <AlertDialogHeader>
            <AlertDialogTitle hidden>Loader</AlertDialogTitle>
            <AlertDialogDescription>
              <Image
                src="/frying-pan.gif"
                alt="Loader"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="text-sm text-gray-400">
            Please wait.. while we generate the recipes..
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Loader;
