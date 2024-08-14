import { Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import {
    CountdownContainer,
    HomeContainer,
    Separator,
} from "./styles";
import { Button } from "../../ui/Button";
import { NewCycleFormData, newCycleFormValidationSchema } from "../../schemas/Home/newCycleFormValidationSchema";
import { NewCycleForm } from "./Components/NewCycleForm";

export const Home = () => {
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
          task: '',
          minutesAmount: 0,
        },
      })

    return (
        <HomeContainer>
            <form action="">
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <CountdownContainer>
                    <span className="text-lg">0</span>
                    <span className="text-lg">0</span>
                    <Separator>:</Separator>
                    <span className="text-lg">0</span>
                    <span className="text-lg">0</span>
                </CountdownContainer>

                <Button type="submit">
                    <Play size={24} />
                    Começar
                </Button>
            </form>
        </HomeContainer>
    );
};
