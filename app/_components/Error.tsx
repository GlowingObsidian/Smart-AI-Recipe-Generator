import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const message: Record<number, string> = {
  406: "Sorry, I can’t create a recipe for that.",
  500: "I had an oopsie in the kitchen, please try again.",
};

function Error({ error }: { error: number }) {
  return (
    <div className="m-5 rounded-md">
      <AlertDialog defaultOpen>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle hidden>Error</AlertDialogTitle>
            <AlertDialogDescription className="text-center text-red-500 text-lg">
              {message[error] || "An unexpected error occurred."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Okay</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Error;
