import React from "react";
import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { KanbanScreen } from "screens/kanban";
import { EpicScreen } from "screens/epic";

export const ProjectScreen = () => {
    return (
        <div>
          <h1>ProjectScreen</h1>
          <Link to={"kanban"}>看板</Link>
          <Link to={"epic"}>任务组</Link>
          {/* 注意 Link 与 Route 所用路径的不同 */}
          <Routes>
            {/*projects/:projectId/kanban*/}
            <Route path={"/kanban"} element={<KanbanScreen />} />
            {/*projects/:projectId/epic*/}
            <Route path={"/epic"} element={<EpicScreen />} />
            <Route path="*" element={<Navigate to={"kanban"} />} />
          </Routes>
        </div>
    );
};