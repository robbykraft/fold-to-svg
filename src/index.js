/**
 * fold to svg (c) Robby Kraft
 */
import { vertices_circle } from "./render/vertices";
import {
  edges_path_data,
  edges_by_assignment_paths_data,
  edges_path,
  edges_line
} from "./render/edges";
import {
  faces_vertices_polygon,
  faces_edges_polygon
} from "./render/faces";
import Append from "./environment/append";
import render from "./render/index";
import * as K from "./keys";

const getObject = function (input) {
  if (input == null) {
    return {};
  }
  if (typeof input === K.object && input !== null) {
    return input;
  }
  if (typeof input === K.string || input instanceof String) {
    try {
      const obj = JSON.parse(input);
      return obj;
    } catch (error) {
      throw error;
    }
  }
  throw new TypeError(`input requires ${K.string} or ${K.object}`);
};

const FoldToSvg = function (input, options) {
  try {
    const fold = getObject(input);
    return render(fold, options);
  } catch (error) {
    throw error;
  }
};

FoldToSvg.vertices_circle = vertices_circle;
FoldToSvg.edges_path_data = edges_path_data;
FoldToSvg.edges_by_assignment_paths_data = edges_by_assignment_paths_data;
FoldToSvg.edges_path = edges_path;
FoldToSvg.edges_line = edges_line;
FoldToSvg.faces_vertices_polygon = faces_vertices_polygon;
FoldToSvg.faces_edges_polygon = faces_edges_polygon;
FoldToSvg.append = Append.bind(FoldToSvg);

export default FoldToSvg;
