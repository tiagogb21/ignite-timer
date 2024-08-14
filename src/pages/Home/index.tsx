import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useContext } from "react";

import {
    HomeContainer,
    StartCountdownButton,
    StopCountdownButton,
} from "./styles";
import { NewCycleForm } from "./Components/NewCycleForm";
import { Countdown } from "./Components/CountDown";
import { NewCycleFormData, newCycleFormValidationSchema } from "../../schemas/Home/newCycleFormValidationSchema";
// import { CyclesContext } from "../../contexts/CyclesContext";

export function Home() {
    // const { activeCycle, createNewCycle, interruptCurrentCycle } =
    //     useContext(CyclesContext);

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });

    const { handleSubmit, watch, reset } = newCycleForm;

    function handleCreateNewCycle(data: NewCycleFormData) {
        // createNewCycle(data);
        reset();
    }

    const task = watch("task");
    const isSubmitDisable = !task;

    return (
        <HomeContainer>
            {/* passamos uma função para a função do react-hook-form */}
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />

                {/* {activeCycle ? (
                    <StopCountdownButton
                        onClick={interruptCurrentCycle}
                        type="button"
                    >
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                        disabled={isSubmitDisable}
                        type="submit"
                    >
                        <Play size={24} />
                        Começar
                    </StartCountdownButton>
                )} */}
            </form>
        </HomeContainer>
    );
}
